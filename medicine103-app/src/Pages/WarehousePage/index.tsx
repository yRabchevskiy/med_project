import React from "react";

interface Props {}
const WarehousePage: React.FC<Props> = (props: Props) => {

  React.useEffect(() => {
  }, []);

  return (
    <div>WarehousePage</div>
  );
};

export default React.memo(WarehousePage);
