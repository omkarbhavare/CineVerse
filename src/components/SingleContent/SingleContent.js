import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import Heart from "../Heart";
import { useTranslation } from 'react-i18next';

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  const { t } = useTranslation();

  return (
    <ContentModal media_type={media_type} id={id}>
      <Heart id={id} media_type={media_type} poster={poster} title={title} date={date} vote_average={vote_average} />
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? t('tv_series') : t('Movies')}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
