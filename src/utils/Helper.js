export function filter_data(statetext, allResturants) {
  return allResturants.filter((set) =>
    set.info.name.toLowerCase().includes(statetext.toLowerCase())
  );
}
