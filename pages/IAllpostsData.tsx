export interface IAllpostsData {
  id: string;
  date: string;
  title: string;
}
export interface HomeProps {
  allPostsData: IAllpostsData[];
}
