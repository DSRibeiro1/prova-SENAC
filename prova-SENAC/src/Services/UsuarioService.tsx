import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://localhost:8080/pedido';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const PedidoService = {
  //1. LISTA  
  fetchPedido(): Promise<AxiosResponse<Pedido[]>> {
    return apiClient.get<Pedido[]>('/lista');
  },

  //2. BUSCA
  fetchPedidoById(id: number): Promise<AxiosResponse<Pedido>> {
    return apiClient.get<Pedido>(`/busca/${id}`);
  },

  //3. CADASTRO
  //Cadastro não retorna
  createPedido(Pedido: Pedido): Promise<AxiosResponse<void>> {
    return apiClient.post('/cadastro', Pedido);
  },

  // Cadastro retorna
  // createPedido(Pedido: Pedido): Promise<AxiosResponse<Pedido>> {
  //   return apiClient.post<Pedido>('/cadastro', Pedido);
  // },

  /////////////////////////////////////////////////////////////////////////////

  //4. ALTERAR
  //Partial: Acesso em parte da classe
  updatePedido(item: string, Pedido: Partial<Pedido>): Promise<AxiosResponse<Pedido>> {
    return apiClient.put<Pedido>(`/alterar/${item}`, Pedido);
  },

  //5. EXCLUIR
  deletePedido(id: number): Promise<AxiosResponse<void>> {
    return apiClient.delete(`/excluir/${id}`);
  }
};

export default PedidoService;
