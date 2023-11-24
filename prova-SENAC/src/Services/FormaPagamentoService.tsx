import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'https://localhost:8080/formaDePagamento';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const FormaPagamentoService = {
  //1. LISTA  
  fetchFormaPagamento(): Promise<AxiosResponse<FormaPagamento[]>> {
      return apiClient.get<FormaPagamento[]>('/lista');
    },
    
    //2. BUSCA
    fetchFormaPagamentoById(id: number): Promise<AxiosResponse<FormaPagamento>> {
      return apiClient.get<FormaPagamento>(`/busca/${id}`);
    },
  
    //3. CADASTRO
    //Cadastro não retorna
    createFormaPagamento(FormaPagamento: FormaPagamento): Promise<AxiosResponse<void>> {
      return apiClient.post('/cadastro', FormaPagamento);
    },
  
    // Cadastro retorna
    // createFormaPagamento(FormaPagamento: FormaPagamento): Promise<AxiosResponse<FormaPagamento>> {
    //   return apiClient.post<FormaPagamento>('/cadastro', FormaPagamento);
    // },
    
    /////////////////////////////////////////////////////////////////////////////
    
  
    //4. ALTERAR
    //Partial: Acesso em parte da classe
    updateFormaPagamento(tipo: string, FormaPagamento: Partial<FormaPagamento>): Promise<AxiosResponse<FormaPagamento>> {
      return apiClient.put<FormaPagamento>(`/alterar/${tipo}`, FormaPagamento);
    },
  
    //5. EXCLUIR
    deleteFormaPagamento(id: number): Promise<AxiosResponse<void>> {
      return apiClient.delete(`/excluir/${id}`);
    }    
  };
  
export default FormaPagamentoService;
