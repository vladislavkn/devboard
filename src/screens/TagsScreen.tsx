import BackButton from "../components/BackButton";
import Navigation from "../components/Navigation";

const TagsScreen: React.FC = () => {
  return (
    <>
      <Navigation title="Tags" leading={<BackButton />} />
    </>
  );
};

export default TagsScreen;
