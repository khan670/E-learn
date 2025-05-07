import mongoose, { Schema, model, Document, Types } from "mongoose";

interface UserType {
  name: string;
  email: string;
  role: "student" | "instructor" | "admin";
  password: string;
  createdAt: Date;
  studentDetails?: {
    enrolledCourses: Types.ObjectId[];
    grade: string;
  };
  instructorDetails?: {
    coursesTeaching: Types.ObjectId[];
    department: string;
  };
  adminDetails?: {
    permissions: string[];
  };
}
export interface IUserModel extends UserType, Document {}
const UserSchema = new Schema<IUserModel>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    role: {
      type: String,
      enum: ["student", "instructor", "admin"],
      default: "student",
    },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

    // Optional subdocument (default behavior)
    studentDetails: {
      type: {
        enrolledCourses: [
          { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        ],
        grade: { type: String },
      },
      required: false,
    },

    // Explicitly optional subdocument
    instructorDetails: {
      type: {
        coursesTeaching: [
          { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
        ],
        department: { type: String },
      },
      required: false,
    },

    // Explicitly optional subdocument
    adminDetails: {
      type: {
        permissions: [{ type: String }],
      },
      required: false,
    },
  },
  { timestamps: true }
);

export const User =
  mongoose.models.User || model<IUserModel>("User", UserSchema);
