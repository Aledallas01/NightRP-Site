export default function KitPvP() {
    return (
      <section className="p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">KitPvP</h1>
        <p className="text-gray-300 mb-6">Combatti in arena e scala la classifica kill.</p>
        {/* Tabella Top 5 kill */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-primary">
              <tr>
                <th className="px-4 py-2">Pos</th>
                <th className="px-4 py-2">Giocatore</th>
                <th className="px-4 py-2">Kill</th>
              </tr>
            </thead>
            <tbody>
              {/* Popolerai via JS */}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  