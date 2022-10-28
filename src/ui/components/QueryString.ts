import { useAppSelector } from '../../store/hooks';

export const QueryString = () => {
  const queryOptions = useAppSelector(state => state.books.queryOptions);
  const genres = queryOptions.currentGenres;
  const price = queryOptions.price;
  const sort = queryOptions.sort;
  const search = queryOptions.searchText;
  let queryString = '/?';

  if (genres.length) {
    queryString += `genre=${genres}&`;
  }
  if (price[0] > 0 || price[1] < 100) {
    queryString += `price=${price}&`;
  }
  if (sort.length || sort === '...') {
    queryString += `sort=${sort}&`;
  }
  if (search.length) {
    queryString += `search=${search}&`
  }

  return queryString;
}

export default QueryString