'use client';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { useContext, createContext, useState } from 'react';
import { supabaseUrl, supabaseKey } from './vars';

export type GlobalStateType = {
	supabase: SupabaseClient;
};

const GlobalStateContext = createContext({});

export function GlobalStateProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [state, setState] = useState({
		supabase: createClient(supabaseUrl as string, supabaseKey as string),
	});

	return (
		<GlobalStateContext.Provider value={{ state, setState }}>
			{children}
		</GlobalStateContext.Provider>
	);
}

export function useGlobalState(): GlobalStateType {
	return useContext(GlobalStateContext) as GlobalStateType;
}
