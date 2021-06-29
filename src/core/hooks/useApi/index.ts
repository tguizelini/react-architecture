/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState } from 'react';
import StorageKeys from '../../data/storage/storageKeys';
import HttpHeader from './httpHeader.model';
import HttpMethod from './httpMethod.enum';
import HttpResponse from './httpResponse.model';
import HttpStatus from './httpStatus.enum';

function useApi<T>(
  url: string,
  method: HttpMethod,
  body?: any,
  headers: HttpHeader[] = [],
) {
  const [responseApi, setResponseApi] = useState<HttpResponse>({
    loading: false,
    error: null,
    data: null,
    success: false,
    status: null
  });

  const callApi = (reqBody?: any) => FetchData(reqBody);

  const getOptions = (reqBody?: any) => {
    const reqHeaders: Headers = new Headers();
    const token = localStorage.getItem(StorageKeys.TOKEN);

    reqHeaders.set('Content-Type', 'application/json');
    if (token) reqHeaders.set('api_key', `token ${token}`);

    if (headers) headers.forEach((h) => reqHeaders.append(h.name!, h.value));

    let newBody = null;

    if (body) {
      if (reqBody) {
        newBody = Object.assign(body, reqBody);
      } else {
        newBody = body;
      }
    } else if (reqBody) {
      newBody = reqBody;
    }

    let options: RequestInit = {
      method,
      headers: reqHeaders,
    };

    if (method !== HttpMethod.GET) {
      options = {
        ...options,
        body: JSON.stringify(newBody) || null,
      };
    }

    return options;
  };

  const FetchData = async (reqBody?: any): Promise<{
    status: number;
    data: object & T | null;
  }> => {
    setResponseApi({ ...responseApi, loading: true });

    const options = getOptions(reqBody);

    try {
      const res = await fetch(url, options)
        .then((data) => {
          return {
            data: data.json(),
            status: data?.status || HttpStatus.SUCCESS
          }
        })
        .catch((e) => {
          return {
            data: e,
            status: HttpStatus.SERVER_ERROR
          }
        });

      if (res.status === HttpStatus.SERVER_ERROR) return onError(res)

      return onSuccess(res)
    } catch (e) {
      return onError(e)
    }
  };

  const onSuccess = (data: any) => {
    const status = data?.status || HttpStatus.SUCCESS

    setResponseApi({
      loading: false,
      data: data,
      error: null,
      status: status,
      success: true,
    });

    return { status, data };
  }

  const onError = (data: any) => {
    const status = data?.status || HttpStatus.SERVER_ERROR
    const isSuccess = !!(status === HttpStatus.CREATED || HttpStatus.SUCCESS || HttpStatus.SUCCESS_NO_CONTENT)

    setResponseApi({
      loading: false,
      data: null,
      error: String(data),
      status: status,
      success: isSuccess,
    });

    return { status, data };
  }

  return { callApi, ...responseApi };
}

export default useApi;
