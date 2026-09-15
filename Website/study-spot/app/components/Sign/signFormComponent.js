export function SignFormComponent() {
    return (
        <form className="space-y-6">
            <div>
                <label>
                    E-mailadres
                </label>
                <div>
                    <input
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                        required
                        type="email"
                    >
                    </input>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Wachtwoord
                </label>
                <input
                     className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
                    required
                    type="password"
                >
                </input>
            </div>
        </form>

    );
}