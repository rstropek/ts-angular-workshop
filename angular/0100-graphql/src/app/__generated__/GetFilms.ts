/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFilms
// ====================================================

export interface GetFilms_allFilms_films {
  __typename: "Film";
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
}

export interface GetFilms_allFilms {
  __typename: "FilmsConnection";
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films: (GetFilms_allFilms_films | null)[] | null;
}

export interface GetFilms {
  allFilms: GetFilms_allFilms | null;
}
