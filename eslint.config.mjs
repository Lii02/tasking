import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	eslintPluginPrettier,
];

export default config;
