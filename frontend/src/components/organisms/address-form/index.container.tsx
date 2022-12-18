import { useEffect, useState } from "react";
import { UseQueryFetchAddress } from "@/services/hooks/api/use-query-fetch-address";
import { AddressForm, IAddress } from ".";
import { useModal } from "react-modal-hook";
import { AddressSelectDialog } from "@/components/organisms/address-select-dialog";

export const AddressFormContainer = () => {
  const [addressList, setAddressList] = useState<IAddress[]>([]);
  const [postalCode, setPostalCode] = useState<string>("");
  const { data, refetch, isFetching } = UseQueryFetchAddress(postalCode);
  const [address, setAddress] = useState<IAddress>();
  const [showModal, hideModal] = useModal(
    ({ in: open }) => (
      <AddressSelectDialog
        hideModal={hideModal}
        open={open}
        address={addressList}
        setAddress={setAddress}
      />
    ),
    [addressList]
  );

  useEffect(() => {
    if (!data || data.length === 0) return;
    if (data.length === 1) setAddress(data[0]);
    if (data.length >= 2) {
      setAddressList(data);
      showModal();
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      if (postalCode.length === 7) await refetch();
    })();
  }, [postalCode]);

  const onSubmit = (data: IAddress) => {
    console.log("data2", data);
  };

  const changePostCode = async (value: string) => {
    setPostalCode(value);
  };

  return AddressForm({ address, onSubmit, isFetching, changePostCode });
};
// 4520961