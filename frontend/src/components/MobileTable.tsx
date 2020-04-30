import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

import { BottomWrapper, AddButton } from "./styled/mobileTableStyled";
import MobileRow from "./MobileRow";

import { StoreInterface } from "../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

const Table = ({
  store: {
    calendar: {
      creating,
      birthdays,
      startCreating,
      endCreating,
      fetchBirthdays,
      birthdaysFetched,
    },
  },
}: OwnProps) => {
  useEffect(function() {
    fetchBirthdays();
  }, []);
  if (!birthdaysFetched) return <div>Loading...</div>;
  return (
    <React.Fragment>
      {birthdays.map((birthday) => (
        <MobileRow
          birthday={birthday}
          key={birthday.id}
          fetchBirthdays={fetchBirthdays}
        />
      ))}
      {creating && (
        <MobileRow
          birthday={null}
          startCreating={startCreating}
          endCreating={endCreating}
          fetchBirthdays={fetchBirthdays}
        />
      )}
      <BottomWrapper>
        {!creating && (
          <AddButton onClick={startCreating}>Add New Birthday</AddButton>
        )}
      </BottomWrapper>
    </React.Fragment>
  );
};

export default inject("store")(observer(Table));
