import axios from 'axios';

const BASE_URL = 'https://67530c06f3754fcea7ba9204.mockapi.io/contacts';

export const fetchContacts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const addContact = async (contact) => {
    const response = await axios.post(BASE_URL, contact);
    return response.data;
};

export const deleteContact = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};
