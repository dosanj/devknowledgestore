import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();

export { saveLink } from './save-link.function';
export { getAllLinks } from './get-links.function';
export { deleteLink } from './delete-link.function';
