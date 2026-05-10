//package springboot_cicd_app.config;
//
//import org.springframework.context.annotation.Bean;
//import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
//import software.amazon.awssdk.regions.Region;
//import software.amazon.awssdk.services.s3.presigner.S3Presigner;
//
//public class S3Configs {
//
//    @Bean
//    public S3Presigner s3Presigner() {
//        return S3Presigner.builder()
//                .region(Region.AP_SOUTH_1)
//                .credentialsProvider(DefaultCredentialsProvider.create())
//                .build();
//    }
//}
