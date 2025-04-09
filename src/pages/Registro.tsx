import React, { useState } from "react";
import { useRouter } from "next/router";
import { registerWithEmail } from "../../utils/firebase"; // Importe a função de registro do Firebase

export default function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await registerWithEmail(email, password, name); // Passando o nome para salvar no banco
      router.push("/login"); // Redireciona para a tela principal após o registro
    } catch (err) {
      setError("Falha ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#1E8376] to-[#1E3A8A] px-4 py-10">
      <div className="bg-[#0F172A] text-white p-8 rounded-2xl w-full max-w-sm shadow-lg transform transition duration-300 hover:scale-105">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-6">Criar Conta</h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Nome */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm mb-1">Nome</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* E-mail */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Senha */}
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

          {/* Confirmar Senha */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm mb-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Botão de Cadastro */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-green-500 hover:bg-green-600 transition text-white font-semibold"
          >
            Criar Conta
          </button>
        </form>

        {error && <p className="mt-4 text-center text-sm text-red-500">{error}</p>} {/* Exibe o erro, se houver */}

        {/* Link para Login */}
        <p className="mt-6 text-center text-sm text-gray-300">
          Já tem uma conta?{' '}
          <button
            onClick={() => router.push("/login")}
            className="text-blue-400 hover:underline"
          >
            Faça login
          </button>
        </p>
      </div>
    </div>
  );
}
