import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCEGG_BU-loNxSRfumOjFbMhCsszHhaNH8",
	authDomain: "crwn-clothing-3326e.firebaseapp.com",
	databaseURL: "https://crwn-clothing-3326e.firebaseio.com",
	projectId: "crwn-clothing-3326e",
	storageBucket: "crwn-clothing-3326e.appspot.com",
	messagingSenderId: "1095360066467",
	appId: "1:1095360066467:web:7a14e163ee5de1b7302016",
	measurementId: "G-157R8YHV40",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		console.log("displayName and email of userAuth ", displayName, email);

		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user ", error.message);
		}
	}
	return userRef;
};

<<<<<<< HEAD
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();

	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

=======
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

<<<<<<< HEAD
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
	auth.signInWithPopup(googleProvider).then((result) => console.log(result));
=======
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
	auth.signInWithPopup(provider).then((result) => console.log(result));
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.

export default firebase;