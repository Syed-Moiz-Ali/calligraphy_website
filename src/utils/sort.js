export const applySort = (sort) => {
    const [field, order] = sort.split("-");
    return { field, order: order === "desc" ? "desc" : "asc" };
};