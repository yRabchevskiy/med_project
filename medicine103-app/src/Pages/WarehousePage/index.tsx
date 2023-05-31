/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { DataTable } from 'primereact/datatable';
import { Column, ColumnBodyOptions } from 'primereact/column';
import { IMedicine } from "../../Models/warehouse";
import { useAddDocToCollection, useGetCollection } from "../../Contexts/Api/api";
import { format, parseISO } from "date-fns";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import IconButton from "../../Components/Buttons/IconButton";
import { addIcon, exportIcon } from "../../Images/icons";
import { ActionRow } from "../styles";
import ModalWindow from "../../Components/ModalWindow";
import MedicineForm from "./MedicineForm";

interface Props { }
const WarehousePage: React.FC<Props> = (props: Props) => {
  const [data, setData] = React.useState<IMedicine[]>([]);
  const [openMedicineModal, setMedicineModalState] = React.useState<boolean>(false);
  const { response, loading, onGetCollection } = useGetCollection<IMedicine[]>();
  const { onAddDocToCollection, ...useAddMed } = useAddDocToCollection<IMedicine>();

  React.useEffect(() => {
    getMedicine();
  }, []);

  React.useEffect(() => {
    if (response) {
      setData(response);
    }
  }, [response]);

  React.useEffect(() => {
    if (useAddMed && useAddMed.response) {
      console.log(useAddMed.response);
    }
  }, [useAddMed.response]);

  const expDateRow = (data: IMedicine, options: ColumnBodyOptions) => {
    if (!data.expDate) return '';
    try {
      const iso = parseISO(data.expDate)
      return <>{format(iso, 'dd.MM.yyyy')}</>;
    } catch (error) {
      return <>{data.expDate}</>;
    }
  };

  const headerTemplate = (data: IMedicine) => {
    return (
      <>{data.group}</>
    );
  };

  const exportPdf = () => {
    const doc = new jsPDF();

    const columns = [['#', 'Name', 'Dose', 'Count', 'Group', 'Exp Date', 'Description']];
    const tdata = data.map((it, i) => [i + 1, it.name, it.dose, it.count, it.group, it.expDate, it.description]);

    autoTable(doc, {
      head: columns,
      body: tdata,
      didDrawPage: (dataArg) => {
        doc.text('PAGE', dataArg.settings.margin.left, 10);
      }
    });

    doc.save('table.pdf');
  };

  const getMedicine = () => {
    onGetCollection('medicine');
  };

  const onAddMedicine = () => {
    setMedicineModalState(true);
  };

  const onCloseMedicineModal = () => { setMedicineModalState(false) };

  const onAddMedicineItem = (dataItem: IMedicine) => {
    onAddDocToCollection('medicine', dataItem);
  };

  return (
    <div>
      <ActionRow>
        <IconButton styles={{ margin: '0 0 0 auto' }} onClick={onAddMedicine}>{addIcon}</IconButton>
        <IconButton styles={{ margin: '0 0 0 12px' }} onClick={exportPdf}>{exportIcon}</IconButton>
      </ActionRow>
      
      <DataTable id="my-table" value={data} loading={loading} rowGroupMode="subheader" groupRowsBy="group"
        rowGroupHeaderTemplate={headerTemplate}
      >
        <Column header="№" body={(data, options) => options.rowIndex + 1}></Column>
        <Column field="name" header="Name"></Column>
        <Column field="dose" header="Dose"></Column>
        <Column field="count" header="Count"></Column>
        <Column field="state" header="State"></Column>
        <Column field="expDate" header="Exp Date" body={expDateRow}></Column>
        <Column field="description" header="Description"></Column>
      </DataTable>
      {openMedicineModal && <ModalWindow title="Add" onClose={onCloseMedicineModal}>
        <MedicineForm onSubmit={onAddMedicineItem} />  
      </ModalWindow>}
    </div>
  );
};

export default React.memo(WarehousePage);
