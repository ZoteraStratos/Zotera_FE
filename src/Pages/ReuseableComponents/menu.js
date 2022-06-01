import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import FolderOpen from "@material-ui/icons/FolderOpen";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import React from "react";
import Folder from "@material-ui/icons/Folder"

export const menu = [

    {
        icon: <FolderOpen />,
        title: "InductiveDemoHub",
        items: [
            {
                icon: <FolderOpen />,
                title: "01",
                items: [
                    {
                        icon: <FolderOpen />,
                        title: "2021",
                        items: [
                            {
                                icon: <FolderOpen />,
                                title: "05",
                                items: [
                                    {
                                        icon: <FolderOpen />,
                                        title: "27",
                                        items: [
                                            {
                                                icon: <FolderOpen />,
                                                title: "00",
                                                to: "/thedowtheory"
                                            }, {
                                                icon: <FolderOpen />,
                                                title: "00",
                                                items: [
                                                    {
                                                        icon: <Folder />,
                                                        title: "00",
                                                        to: "/thedowtheory"
                                                    }, {
                                                        icon: <Folder />,
                                                        title: "02",
                                                        to: "/thedowtheory"
                                                    },

                                                ]
                                            },

                                        ]
                                    },


                                ]
                            }
                        ]
                    },


                ]
            },


        ]
    },
  
];
