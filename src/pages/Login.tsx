import React, { useState } from "react";
import { useRouter } from "next/router";
import { loginWithEmail } from "../../utils/firebase"; // Importe a função de login do Firebase

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      router.push("/informacoes"); // Redireciona para a tela principal após o login
    } catch (err) {
      setError("Falha ao fazer login. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1E8376] to-[#1E3A8A] px-4 py-10">
      {/* Card de Login */}
      <div className="bg-[#0F172A] text-white p-8 rounded-2xl w-full max-w-sm shadow-lg transform transition duration-300 hover:scale-105">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Campo de E-mail */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de Senha */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm mb-1">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-green-500 hover:bg-green-600 transition text-white font-semibold"
          >
            Login
          </button>
        </form>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>}

        {/* Link para a tela de "Esqueceu a Senha" */}
        <p className="mt-4 text-center text-sm text-gray-300">
          Esqueceu a senha?{' '}
          <button
            onClick={() => router.push("/esqueceuSenha")} 
            className="text-blue-400 hover:underline"
          >
            Clique aqui
          </button>
        </p>

        {/* Link para Cadastro */}
        <p className="mt-6 text-center text-sm text-gray-300">
          Não tem uma conta?{' '}
          <button
            onClick={() => router.push("/registro")}
            className="text-blue-400 hover:underline"
          >
            Cadastre-se
          </button>
        </p>
      </div>
    </div>
  );
}
