import axios from 'axios';
import { List } from '../interfaces/CommonProps'
import apiconfig  from '../config'

export const getList = async ()  => {
    try {
      const result = await axios.get(`${apiconfig.url}/lists`)
      return result.data
    } catch (error) {
      return error;
    }
}

export const addList = async (data: List) => {
    try {
       const result = await axios.post(`${apiconfig.url}/addToDo`, data)
       return result
    } catch (error) {
       return error;
    }
}

export const doneList = async (id: number) => {
    try {
      const result = await axios.put(`${apiconfig.url}/doneTodo/${id}`)
      return result
    } catch (error) {
      return error;
    }
}

export const deleteList = async (id: number) => {
    try {
       const result = await axios.delete(`${apiconfig.url}/deleteTodo/${id}`)
       return result
    } catch (error) {
       return error;
    }
}