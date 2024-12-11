
import '@testing-library/jest-dom/extend-expect'; 
import { server } from './mocks/server'; 

// Este bloque inicia el servidor mock para simular las respuestas de la API
/* beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close()); */