import * as functions from 'firebase-functions';
import { getFireStoreDB } from './firestore';
const db = getFireStoreDB();
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send({ data: { message: 'Hello from Firebase!' } });
});
export { saveLink } from './save-link.function';
export { getAllLinks } from './get-links.function';
