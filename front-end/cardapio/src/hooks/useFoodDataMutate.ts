import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FoodData } from '../interaface/FoodData';
import axios, { AxiosPromise } from "axios";

const API_URL = 'http://localhost:8000';

const postData = async (data: FoodData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + '/food', data);
    return response;
    
} 

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:['food-data']})
        }
    });

    return mutate;

}