"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Player",
    embedded: false
  },
  {
    name: "PersonalInfo",
    embedded: true
  },
  {
    name: "WhereFrom",
    embedded: true
  },
  {
    name: "Assessment",
    embedded: true
  },
  {
    name: "Size",
    embedded: true
  },
  {
    name: "Injury",
    embedded: false
  },
  {
    name: "Match",
    embedded: false
  },
  {
    name: "Score",
    embedded: true
  },
  {
    name: "HomeAndAway",
    embedded: true
  },
  {
    name: "Substitutions",
    embedded: true
  },
  {
    name: "Goal",
    embedded: false
  },
  {
    name: "Assist",
    embedded: false
  },
  {
    name: "Booking",
    embedded: false
  },
  {
    name: "Team",
    embedded: false
  },
  {
    name: "Staff",
    embedded: false
  },
  {
    name: "StaffInfo",
    embedded: true
  },
  {
    name: "StaffFrom",
    embedded: true
  },
  {
    name: "StaffSize",
    embedded: true
  },
  {
    name: "PlayerPosition",
    embedded: false
  },
  {
    name: "Foot",
    embedded: false
  },
  {
    name: "ColorCard",
    embedded: false
  },
  {
    name: "Competiton",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
