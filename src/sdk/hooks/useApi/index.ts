/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';
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
    status: HttpStatus.SUCCESS
  });

  const callApi = (reqBody?: any) => FetchData(reqBody);

  const FetchData = async (reqBody?: any): Promise<{
    status: number;
    data: object & T | null;
  }> => {
    setResponseApi({ ...responseApi, loading: true });

    try {
      let res: any

      const api = axios.create({
        headers: {
          ...headers,
          "Content-Type": "application/json",
        }
      })

      api.interceptors.request.use(
        config => {
          const token = localStorage.getItem(StorageKeys.TOKEN);

          if (token) config.headers['api_key'] = `token ${token}`;

          return Promise.resolve(config)
        },
        error => {
          return Promise.reject(error)
        },
      )

      switch (method) {
        case HttpMethod.GET:
          await api.get(url)
            .then(response => res = response)
            .catch(error => {
              if (error.response)
                res = error.response
            })

          break
        case HttpMethod.POST:
          await api.post(url, body || reqBody || null)
            .then(response => res = response)
            .catch(error => {
              if (error.response)
                res = error.response
            })
          break
        case HttpMethod.PUT:
          await api.put(url, body || reqBody || null)
            .then(response => res = response)
            .catch(error => {
              if (error.response)
                res = error.response
            })
          break
        case HttpMethod.DELETE:
          await api.delete(url, body || reqBody || null)
            .then(response => res = response)
            .catch(error => {
              if (error.response)
                res = error.response
            })
          break
        default: break
      }

      if (
        res.status != HttpStatus.SUCCESS &&
        res.status != HttpStatus.CREATED &&
        res.status != HttpStatus.SUCCESS_NO_CONTENT
      ) {
        return onError(res.data)
      }

      return onSuccess(res.data)
    } catch (e) {
      return onError(e)
    }
  };

  const onSuccess = (data: any) => {
    const status = HttpStatus.SUCCESS

    setResponseApi({
      loading: false,
      data: data.data || data,
      error: null,
      status: status,
      success: true,
    });

    return { status, data };
  }

  const onError = async (data: any) => {
    const status = data?.status
    const isSuccess = !!(status === HttpStatus.CREATED || HttpStatus.SUCCESS || HttpStatus.SUCCESS_NO_CONTENT)

    setResponseApi({
      loading: false,
      data: data,
      error: data,
      status: status,
      success: isSuccess,
    });

    return { status, data };
  }

  return { callApi, ...responseApi };
}

export default useApi;
