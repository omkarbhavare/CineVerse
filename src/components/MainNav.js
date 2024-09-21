import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#2d313a",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/series");
    } else if (value === 3) {
      history.push("/favorites");
    }else if (value === 4) {
      history.push("/search");
    }
  }, [value, history]);
  const { t } = useTranslation();
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: "white" }}
        label={t("Trending")}
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label={t("Movies")}
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label={t("TV Series")}
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label={t("Like")}
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={{ color: "white" }}
        label={t("Search")}
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
