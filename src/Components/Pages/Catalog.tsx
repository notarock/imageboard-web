import React from "react";

interface Props {
  message: string;
}

export const CatalogPage = (props: Props) => {
  return <>{props.message}</>;
};
