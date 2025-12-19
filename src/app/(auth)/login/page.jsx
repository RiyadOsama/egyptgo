import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded-md"
              placeholder="Enter your password"
            />
            <Link href="/reset-password" className="text-orange-600 hover:underline mt-4 block">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Login
          </button>
          <div>
            <Link href="/signup" className="text-black hover:underline mt-4 block text-center">
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
