import { useQuery } from "@tanstack/react-query";
import { FoodData } from '../interaface/FoodData';
import { AxiosPromise } from './../../../../node_modules/axios/index.d';
import axios from "axios";

const API_URL = 'http://localhost:8000';

const featchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;
    
} 

export function useFoodData(){

    const query = useQuery({
        queryFn: featchData,
        queryKey: ['food-data'],
        retry: 2
    });

    return{
        ...query,
        data: query.data?.data
    }

}