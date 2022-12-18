import React from 'react';
import {gql} from "graphql-request";
import {graphcms} from "../client";

export const getAllProjects = async () => {
    const getAllProjectsQuery = gql`
        {
            projects {
                createdAt
                description
                id
                publishedAt
                source
                tags
                title
                updatedAt
                image {
                  url
                }
              }
        }
    `;

    const {projects} = await graphcms.request(getAllProjectsQuery);

    return projects;
};