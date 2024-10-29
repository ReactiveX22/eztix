import React from 'react';
import { format } from 'date-fns';
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 16,
    width: '100%',
    height: '100%',
  },
  ticketContainer: {
    width: 300,
    margin: '0 auto',
    padding: 10,
    border: '2px dashed #16a34a',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '60%',
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'black',
    textAlign: 'center',
    paddingBottom: 5,
    marginBottom: 20,
    borderBottom: '1px solid #16a34a',
  },
  grid: {
    // marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    textAlign: 'right',
    width: '48%',
    paddingRight: 5,
  },
  value: {
    textAlign: 'left',
    width: '48%',
    flexWrap: 'wrap',
  },
  separator: {
    marginVertical: 5,
  },
});

const TicketPDFDocument = ({ ticket }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.ticketContainer}>
        <Text style={styles.header}>eztix</Text>
        <View style={styles.grid}>
          <View style={styles.row}>
            <Text style={styles.label}>Customer Phone:</Text>
            <Text style={styles.value}>{ticket.customer_phone}</Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Coach ID:</Text>
            <Text style={styles.value}>{ticket.coach_id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Departure Time:</Text>
            <Text style={styles.value}>
              {format(new Date(ticket.departure_time), 'd MMM, h:mm a')}
            </Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>From:</Text>
            <Text style={styles.value}>{ticket.start_location}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>To:</Text>
            <Text style={styles.value}>{ticket.end_location}</Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Seats:</Text>
            <Text style={styles.value}>{ticket.seats}</Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.label}>Seats Fare:</Text>
            <Text style={styles.value}>{ticket.seats_fare}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Total Fare:</Text>
            <Text style={styles.value}>{ticket.total_fare}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default TicketPDFDocument;
