import { DocumentReference, addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase-config";

interface IApiRes<T> {
  response: T | null;
  error: any;
  loading: boolean;
  // onPost?: (url: string, _data: any, token: string, param?: any) => void;
  // onPut?: (url: string, _data: any, token: string, param?: any) => void;
  // onPatch?: (url: string, _data: any, token: string, param?: any) => void;
  // onDelete?: (url: string, token: string, param?: any) => void;
}

interface IGetCollection<T> extends IApiRes<T> {
  onGetCollection: (collectionName: string) => void;
}

interface IAddDocToCollection<T> extends IApiRes<T> {
  onAddDocToCollection: (collectionName: string, data: T) => void;
}

export const useGetCollection = <T = any>(): IGetCollection<T> => {
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<any | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onGetCollection = React.useCallback(async (collectionName: string) => {
    let isSubscribed = true;
    setloading(true);
    setError(null);
    await getDataAsync(isSubscribed, collectionName);
    return () => {
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const getDataAsync = async (isSubscribed: boolean, collectionName: string) => {
    const colRef = collection(db, collectionName);
    await getDocs(colRef)
      .then((res: any) => {
        if (!isSubscribed) return;
        setResponse(res.docs.map((doc: any) => doc.data()));
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onGetCollection };
};

export const useAddDocToCollection = <T = any>(): IAddDocToCollection<T> => {
  const [response, setResponse] = React.useState<T | null>(null);
  const [error, setError] = React.useState<any | null>(null);
  const [loading, setloading] = React.useState<boolean>(false);

  const onAddDocToCollection = React.useCallback(async (collectionName: string, data: T) => {
    let isSubscribed = true;
    setloading(true);
    setError(null);
    await setDataAsync(isSubscribed, collectionName, data);
    return () => {
      console.log('Cancelling in cleanup');
      setloading(false);
      setError(null);
      setResponse(null);
      isSubscribed = false;
    };
  }, []);

  const setDataAsync = async (isSubscribed: boolean, collectionName: string, data: any) => {
    const colRef = collection(db, collectionName);
    await addDoc(colRef, data)
      .then((res: DocumentReference) => {
        if (!isSubscribed) return;
        console.log(res.id);
        // setResponse(res.id);
      })
      .catch(err => {
        if (!isSubscribed) return;
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data);
          return;
        }
        setError(err.toJSON());
      })
      .finally(() => {
        if (!isSubscribed) return;
        setloading(false);
      });
  };

  return { response, error, loading, onAddDocToCollection };
};