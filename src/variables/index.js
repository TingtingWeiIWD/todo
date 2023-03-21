const statuses = [
  { id: 1, text: "Open" },
  { id: 2, text: "Waiting for Approval" },
  { id: 3, text: "Completed" },
];

const getStatus = (id) => {
  const item = statuses.find((status) => status.id === id);
  return item?.text || "Not set";
};
export { statuses, getStatus };
