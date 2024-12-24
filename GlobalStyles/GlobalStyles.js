import { StyleSheet } from "react-native"
import colors from "../GlobalColors/GlobalColor";

const GlobalStyles = StyleSheet.create({
    componentStyle: {
      marginTop: 2,
      marginBottom: 6,
      
    },
    inputFieldsmb: {
      marginBottom: 10
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 16,
      paddingHorizontal: 16,
      paddingVertical: 13,
      marginBottom: 12,
      fontSize: 16,
      color: '#333',
      backgroundColor: colors.textInput,
  },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        paddingVertical:1,
        borderRadius: 22,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
      },
      icon: {
        marginRight: 8,
      },
      input: {
        flex: 1
      },
      input2:{
          height: 50,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 16,
          paddingHorizontal: 15
      },
      innerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      },
      receivedContainer: {
        alignItems: 'center',
        marginStart: 27.5,
        width: "40%"
      },
      payContainer: {
        alignItems: 'center',
        marginEnd: 27.5,
        width: "40%"

      },
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
    },
    selectType: {
      borderRadius: 16,
      borderWidth:1,
      backgroundColor: colors.textInput,
      borderColor: '#ddd',
      height: 50

    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      borderTopWidth:1,
      borderColor: colors.borderColor,
      width: '100%',
      paddingHorizontal: 16,
      backgroundColor: 'white'
  },
  invitationInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 4,
    borderRadius: 16,
    marginVertical: 28,
    paddingHorizontal: 10,
    width: '100%',
  },
    
  sectionHeader: {
    backgroundColor: "#FFF1FF",
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5
  },
  expContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: colors.borderColor,
    marginVertical: 4,
    paddingHorizontal: 18,
    height: 72,
    marginHorizontal: 16
  },
  scrollViewContent: {
    paddingBottom: 'auto',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginVertical: 1,
  },
  noDataFoundComp: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  
   
  },
   centerAlignedContainer : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  }
    
});

export default GlobalStyles;