import React from "react";

const getPartnerInfo = (participants, email) => {
  return participants.find((participant) => participant.email !== email);
};

export default getPartnerInfo;
