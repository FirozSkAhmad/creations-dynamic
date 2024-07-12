import { useNuxtApp } from '#app';
import { getDocs, collection } from 'firebase/firestore';
import { defineStore } from 'pinia';

import { db, auth } from '~/plugins/firebase.client';

// Helper function to format dates
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  return `${month} ${day}`;  // Updated to remove '/' based on your example
};

const tipsArray = (bodyText) => {
  if (!bodyText) return []; // Return an empty array if bodyText is undefined or empty
  // Splitting the text at each double newline, which often separates paragraphs
  return bodyText.split("\n\n").filter(tip => tip.trim() !== "");
}


export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: []
  }),
  actions: {
    async fetchBlogs() {
      if (this.blogs.length === 0) {  // Only fetch if blogs are not already fetched
        try {
          // const { db } = useNuxtApp().$firebase;
          const collectionRef = collection(db, "In The Blog");;
          const snapshot = await getDocs(collectionRef);
          this.blogs = snapshot.docs.map(doc => ({
            id: doc.id,
            title: doc.data().heading,
            imageUrl: doc.data().img,
            description: tipsArray(doc.data().bodyText),
            uploadDate: formatDate(doc.data().uploadDate),
          }));
        } catch (err) {
          console.error("Error fetching blogs from Firestore:", err);
        }
      }
    }
  }
});



