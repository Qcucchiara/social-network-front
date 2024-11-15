import { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";

/**
 *
 * @param response > import a promise of an AxiosResponse
 * @param id > import an unique identifier to not permit duplicate between toasters
 * @param loadMsg > optionnal: import a string for the loading message. By default the loading return "Chargement"
 * @returns > return a promise of an AxiosResponse
 *
 */
export default async function handleStatusToaster(
  response: Promise<AxiosResponse<any, any>>,
  id: string,
  loadMsg?: string,
) {
  toast.promise(
    response,
    {
      loading: loadMsg ? loadMsg : "Chargement",
      success: (res) => {
        return res.data.message ? res.data.message : res.statusText;
      },
      error: (err: AxiosError<Error>) => {
        return err.response ? err.response.data.message : err.message;
      },
    },
    { id: id },
  );
  return response;
}

export function handleSucces(message?: string) {
  return toast.success(message || "Succès");
}

export function handleError(message?: string) {
  return toast.error(message || "Erreur");
}
