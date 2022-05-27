import data from './YourLibrary.json'

export default function Home() {
  const { tracks } = { ...data }
  const { artists } = { ...tracks }

  return (
    <div>
      <h1>start</h1>
      {tracks?.map((el, i) => (
        <p>
          {i} - {el.artist}
        </p>
      ))}
    </div>
  )
}
