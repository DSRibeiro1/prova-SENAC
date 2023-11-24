import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://localhost:8080/endereco';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

//Fetch = buscar ou capturar dados
const AddressService = {
  //1. LISTA.   
  fetchAddress(): Promise<AxiosResponse<Address[]>> {
    return apiClient.get<Address[]>('/lista');
  },

  //2. BUSCA
  fetchAddressById(id: number): Promise<AxiosResponse<Address>> {
    return apiClient.get<Address>(`/busca/${id}`);
  },


  //3. CADASTRO
  // Cadastro não retorna
  createAddress(Address: Address): Promise<AxiosResponse<void>> {
    return apiClient.post('/cadastro', Address);
  },

  // Cadastro retorna
  // createAddress(Address: Address): Promise<AxiosResponse<Address>> {
  //   return apiClient.post<Address>('/cadastro', Address);
  // },

  /////////////////////////////////////////////////////////////////////////////


  //4. ALTERAR
  //Partial: Acesso em parte da classe
  updateAddress(rua: string, Address: Partial<Address>): Promise<AxiosResponse<Address>> {
    return apiClient.put<Address>(`/alterar/${rua}`, Address);
  },

  //5. EXCLUIR
  deleteAddress(id: number): Promise<AxiosResponse<void>> {
    return apiClient.delete(`/excluir/${id}`);
  }
};

// Exporte o objeto AddressService para uso em outros lugares
export default AddressService;
