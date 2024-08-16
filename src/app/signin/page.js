'use client';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import styles from '../../../styles/Signup.module.css';
import { auth, googleAuthProvider } from '../../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import swal from 'sweetalert';
import { useRouter } from 'next/navigation';


const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleSigninUser = async (e) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			swal({
				title: '👏🏽',
				text: 'Welcome',
				icon: 'success',
				button: 'OK',
			});
			router.push('/');
		} catch (error) {
			swal({
				title: 'Oops😞',
				text: 'Sorry',
				icon: 'error',
				button: 'OK',
			});
		}
	};

	// Function to handle Login with google
	const handleLoginWithGoogle = async () => {
	
		try {
			await signInWithPopup(auth, googleAuthProvider);
			swal({
				title: '👏🏽',
				text: 'You have successfully logged in! Welcome to HealthSmart',
				icon: 'success',
				button: 'OK',
			});
			navigate('/');
		} catch (error) {
			swal({
				title: 'Oops😞',
				text: 'Sorry',
				icon: 'error',
				button: 'OK',
			});
		}
	};

	return (
		<div className={styles.signup}>
			<div className={styles.overlay}>
				<div className={styles.signupForm}>
					<h2 className={styles.signupHead}>Login</h2>
					<form onSubmit={handleSigninUser}>
						<div className='mb-4'>
							<label htmlFor='email' className={styles.label}>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className={styles.input}
							/>
						</div>
						<div className='mb-4'>
							<label htmlFor='password' className={styles.label}>
								Password
							</label>
							<input
								type='password'
								id='password'
								name='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className={styles.input}
							/>
						</div>
						<button type='submit' className={styles.btnSignup}>
							Login
						</button>
						<hr />
						<div className='flex justify-center flex-center my-4'>
							<button
								type='button'
								onClick={handleLoginWithGoogle}
								className={styles.btnGoogle}>
								<FcGoogle className='mx-2 lg:text-2xl' />
								Or Login with Google
							</button>
						</div>
					</form>
					<p className='text-center text-slate-900 text-sm mt-4'>
						Dont have an account?{' '}
						<a href='/signup' className='text-white hover:underline'>
							SignUp
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
