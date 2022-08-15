CREATE MIGRATION m1m7lnifbyn4tzjq4lxm7krwans7zrjiw6vd35wl5mi5yatnvuh6pa
    ONTO initial
{
  CREATE TYPE default::Todo {
      CREATE REQUIRED PROPERTY done -> std::bool {
          SET default := false;
      };
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
