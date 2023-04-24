import React from "react";

interface Props {}
const MedicinePage: React.FC<Props> = (props: Props) => {

  React.useEffect(() => {
  }, []);

  return (
    <div>MedicinePage</div>
  );
};

export default React.memo(MedicinePage);
