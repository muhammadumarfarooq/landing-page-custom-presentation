"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { slides } from "@/lib/slides";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  section: {
    marginBottom: 30,
    padding: 10,
    borderBottom: "1 solid #eee",
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
});

export const SlidePdfDocument = () => (
  <Document>
    {slides.map((slide) => (
      <Page size="A4" style={styles.page} key={slide.id}>
        <View style={styles.section}>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>
        </View>
      </Page>
    ))}
  </Document>
);
