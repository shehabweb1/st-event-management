import React, { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthProviderContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	const provider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const loginWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				Swal.fire(
					"Thank You!",
					"Your account has been created successful!",
					"success"
				);
			})
			.catch((error) => {
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};

	const loginUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	const authValue = {
		user,
		createUser,
		loginWithGoogle,
		loginUser,
		logOut,
		loading,
	};

	return (
		<AuthProviderContext.Provider value={authValue}>
			{children}
		</AuthProviderContext.Provider>
	);
};

export default AuthProvider;
