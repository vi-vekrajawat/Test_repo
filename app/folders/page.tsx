import fs from 'fs'
import path from 'path'

export default function FoldersPage() {
  const root = process.cwd()
  const entries = fs.readdirSync(root, { withFileTypes: true })
  const folders = entries.filter((e) => e.isDirectory()).map((d) => d.name)

  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, Arial' }}>
      <h1>Folders in {path.basename(root)}</h1>
      {folders.length === 0 ? (
        <p>No folders found.</p>
      ) : (
        <ul>
          {folders.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
