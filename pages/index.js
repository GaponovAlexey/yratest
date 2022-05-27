import data from './YourLibrary.json'

export default function Home() {
  const { tracks } = {...data}
  const { artists } = {...tracks}

  // const array = [1, 2, 3, 1, 1, '1', '2', '1', true, false, true, null, undefined, null, null, undefined];

  const getUnique = function (arr) {
    var i = 0,
    current,
    length = arr.length,
    unique = [];
    for (; i < length; i++) {
      current = arr[i];
      if (!~unique.indexOf(current)) {
        unique.push(current);
      }
    }
    return unique;
  };
  const newdata = getUnique(tracks)

  return (
    <div>
    <h1>start</h1>
      {newdata?.map((el, i) => (
        <p>
          {i} - {el.artist}
        </p>
      ))}
    </div>
  )
}
