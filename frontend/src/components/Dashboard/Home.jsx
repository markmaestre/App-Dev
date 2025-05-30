
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeDashboard = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleSignUpPress = () => {
    navigation.navigate('SignUp'); 
  };

  const handleAboutPress = () => {
    navigation.navigate('About'); 
  };

  const handleContactPress = () => {
    navigation.navigate('Contact'); 
  };

  const handleServicesPress = () => {
    navigation.navigate('Services'); 
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Header with Login Button */}
      <View style={styles.header}>
        <Text style={styles.logo}>Tralalero</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUpPress}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Tung Tung Tung Sahur</Text>
            <Text style={styles.heroSubtitle}>
            Ballerina Cappuccina 
            </Text>
            <TouchableOpacity style={styles.ctaButton} onPress={handleSignUpPress}>
              <Text style={styles.ctaText}>Start </Text>
            </TouchableOpacity>
          </View>
          
       
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
          <View style={styles.decorativeCircle3} />
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Choose Us?</Text>
          
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🚀</Text>
              <Text style={styles.featureTitle}>Fast & Reliable</Text>
              <Text style={styles.featureDescription}>
                Lightning-fast performance with 99.9% uptime guarantee
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🔒</Text>
              <Text style={styles.featureTitle}>Secure</Text>
              <Text style={styles.featureDescription}>
                Enterprise-grade security to protect your data
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>💡</Text>
              <Text style={styles.featureTitle}>Innovative</Text>
              <Text style={styles.featureDescription}>
                Cutting-edge features powered by AI technology
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🌍</Text>
              <Text style={styles.featureTitle}>Global</Text>
              <Text style={styles.featureDescription}>
                Available worldwide with 24/7 customer support
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity style={styles.actionButton} onPress={handleAboutPress}>
              <Text style={styles.actionIcon}>ℹ️</Text>
              <Text style={styles.actionText}>About Us</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleServicesPress}>
              <Text style={styles.actionIcon}>⚙️</Text>
              <Text style={styles.actionText}>Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleContactPress}>
              <Text style={styles.actionIcon}>📞</Text>
              <Text style={styles.actionText}>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>10K+</Text>
            <Text style={styles.statLabel}>Happy Users</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>99.9%</Text>
            <Text style={styles.statLabel}>Uptime</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24/7</Text>
            <Text style={styles.statLabel}>Support</Text>
          </View>
        </View>

 
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
          <Text style={styles.ctaDescription}>
           
          </Text>
          <View style={styles.ctaButtons}>
            <TouchableOpacity style={styles.primaryCta} onPress={handleSignUpPress}>
              <Text style={styles.primaryCtaText}>Sign Up Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryCta} onPress={handleContactPress}>
              <Text style={styles.secondaryCtaText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: 'rgba(26, 26, 46, 0.95)',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  signUpButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3498db',
  },
  signUpText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  scrollContainer: {
    flex: 1,
  },
  heroSection: {
    minHeight: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    zIndex: 1,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#b8b8d1',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  ctaButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 5,
    shadowColor: '#e74c3c',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  decorativeCircle1: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    top: -50,
    right: -50,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(231, 76, 60, 0.1)',
    bottom: -30,
    left: -30,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(155, 89, 182, 0.1)',
    top: 100,
    left: 50,
  },
  featuresSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#16213e',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    width: (width - 60) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 12,
    color: '#b8b8d1',
    textAlign: 'center',
    lineHeight: 16,
  },
  quickActionsSection: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#1a1a2e',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 16,
  },
  actionButton: {
    backgroundColor: 'rgba(52, 152, 219, 0.1)',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    minWidth: 100,
    borderWidth: 1,
    borderColor: 'rgba(52, 152, 219, 0.3)',
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  actionText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#16213e',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#b8b8d1',
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaDescription: {
    fontSize: 14,
    color: '#b8b8d1',
    textAlign: 'center',
    marginBottom: 30,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryCta: {
    backgroundColor: '#e74c3c',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  primaryCtaText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  secondaryCta: {
    borderWidth: 1,
    borderColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  secondaryCtaText: {
    color: '#3498db',
    fontSize: 14,
    fontWeight: '600',
  },
});