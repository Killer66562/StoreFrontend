export const getStaticFile = (filename: string) => {
    return import.meta.env.VITE_API_URL + "/static/" + filename;
}

export const getStaticFileArray = (filenames: string[]) => {
    let arr: string[] = []
    filenames.forEach(filename => {
        arr.push(import.meta.env.VITE_API_URL + "/static/" + filename)
    });
    return [...arr];
}